import { withAuth } from 'next-auth/middleware';

export const config = {matcher:'/dashboard'}

export default withAuth({
  pages: {
    signIn: '/sign-in'
  },
  redirect: ({ ctx, target }) => {
    const { res } = ctx;
    if (res) {
      res.writeHead(302, { Location: target });
      res.end();
    }
  }
});