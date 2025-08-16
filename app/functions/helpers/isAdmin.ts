
import { Context } from 'telegraf';

export const isAdmin = async (ctx: Context): Promise<boolean> => {
  if (!ctx.from || !ctx.chat) {
    return false;
  }

  if (ctx.chat.type === 'private') {
    return true; // In private chat, user is always an "admin"
  }

  const chatMember = await ctx.getChatMember(ctx.from.id);
  return ['administrator', 'creator'].includes(chatMember.status);
};
