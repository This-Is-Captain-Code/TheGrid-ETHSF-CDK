import { next } from '@vercel/edge';

export const config = {
    matcher: ['/'],
};

export default function middleware(request: Request) {
    console.log('inside middleware')
    const url = new URL(request.url);
    return next();
}