import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  revalidateTag("random-pokemon");
  return Response.json('Revalidated successfully');
}
