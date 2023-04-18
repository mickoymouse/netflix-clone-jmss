import axios, { AxiosResponse } from 'axios';
import { NextResponse } from 'next/server';

const CACHE_TIME = 2 * 24 * 60 * 60; // cache for 2 days

export async function GET(req: Request) {
  try {
	const API_KEY = process.env.API_KEY;
    if (!API_KEY) {
      throw new Error('API_KEY not found in environment');
    }
    const response: AxiosResponse = await axios.get('https://api.themoviedb.org/3/configuration', {
      params: {
        api_key: API_KEY,
      },
      headers: {
        'Cache-Control': `max-age=${CACHE_TIME}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
