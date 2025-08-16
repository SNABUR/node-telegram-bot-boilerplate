import bot from "../telegraf.js";
import { isAdmin } from '../helpers/isAdmin';
import prisma from '../../lib/prisma';
import cache from '../../lib/cache.js';

/**
 * Invalidates all relevant caches for a given chat group.
 * @param {number | string} chatId The ID of the chat to invalidate.
 */
const invalidateGroupCache = (chatId: number | string) => {
    cache.del(`group-config-${chatId}`);
    cache.del('active-monitor-configs');
    console.log(`Cache invalidated for chat ID: ${chatId}`);
};

export const chatid = async (): Promise<void> => {
  bot.command('chatid', async (ctx: any) => {
    if (ctx.chat.type === 'private') {
      return ctx.reply('This command only works in groups.');
    }

    if (!(await isAdmin(ctx))) {
      return ctx.reply('You do not have permission to execute this command.');
    }

    await ctx.reply(`The ID of this chat is: ${ctx.chat.id}`);
  });
};

export const settoken = async (): Promise<void> => {
  bot.command('settoken', async (ctx: any) => {
    if (ctx.chat.type === 'private') {
      return ctx.reply('This command only works in groups.');
    }

    if (!(await isAdmin(ctx))) {
      return ctx.reply('You do not have permission to execute this command.');
    }

    const tokenAddress = ctx.message.text.split(' ')[1];
    if (!tokenAddress) {
      return ctx.reply('Please specify a token address. Example: /settoken 0x123...');
    }

    try {
      const token = await prisma.token.findFirst({
        where: { address: tokenAddress },
      });

      if (!token) {
        return ctx.reply(`No token found with the address ${tokenAddress}.`);
      }

      await prisma.groupConfiguration.upsert({
        where: { chatId: ctx.chat.id },
        update: { spikeMonitorTokenId: token.id, spikeMonitorEnabled: true },
        create: { chatId: ctx.chat.id, spikeMonitorTokenId: token.id, spikeMonitorEnabled: true },
      });

      invalidateGroupCache(ctx.chat.id);

      await ctx.reply(`The token for the spike monitor has been set to: ${token.symbol} (${token.address})`);
    } catch (error) {
      console.error(error);
      await ctx.reply('An error occurred while setting the token.');
    }
  });
};

export const monitor = async (): Promise<void> => {
  bot.command('monitor', async (ctx: any) => {
    if (ctx.chat.type === 'private') {
      return ctx.reply('This command only works in groups.');
    }

    if (!(await isAdmin(ctx))) {
      return ctx.reply('You do not have permission to execute this command.');
    }

    try {
      const groupConfig = await prisma.groupConfiguration.findUnique({
        where: { chatId: ctx.chat.id },
      });

      const currentState = groupConfig?.spikeMonitorEnabled || false;
      const newState = !currentState;

      const updateData: any = { spikeMonitorEnabled: newState };
      let statusMessage = newState ? 'Enabled' : 'Disabled';

      if (newState) {
        const threadId = ctx.message?.message_thread_id?.toString();
        updateData.spikeMonitorThreadId = threadId;
        if (threadId) {
          statusMessage += ` in this thread`;
        }
      }

      await prisma.groupConfiguration.upsert({
        where: { chatId: ctx.chat.id },
        update: updateData,
        create: { chatId: ctx.chat.id, ...updateData },
      });

      invalidateGroupCache(ctx.chat.id);

      await ctx.reply(`The spike monitor has been ${statusMessage}.`);
    } catch (error) {
      console.error(error);
      await ctx.reply('An error occurred while changing the monitor state.');
    }
  });
};

export const setgif = async (): Promise<void> => {
  bot.command('setgif', async (ctx: any) => {
    if (ctx.chat.type === 'private') {
      return ctx.reply('This command only works in groups.');
    }

    if (!(await isAdmin(ctx))) {
      return ctx.reply('You do not have permission to execute this command.');
    }

    const gifUrl = ctx.message.text.split(' ')[1];
    if (!gifUrl) {
      return ctx.reply('Please specify a GIF URL. Example: /setgif https://example.com/my.gif');
    }

    try {
      await prisma.groupConfiguration.upsert({
        where: { chatId: ctx.chat.id },
        update: { spikeMonitorGifUrl: gifUrl },
        create: { chatId: ctx.chat.id, spikeMonitorGifUrl: gifUrl },
      });

      invalidateGroupCache(ctx.chat.id);

      await ctx.reply(`The GIF for spike notifications has been set.`);
    } catch (error) {
      console.error(error);
      await ctx.reply('An error occurred while setting the GIF.');
    }
  });
};