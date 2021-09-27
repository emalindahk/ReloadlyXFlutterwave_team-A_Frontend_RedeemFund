import useSWR from "swr";
import { useSession } from "next-auth/client";

const fetcher = async (url, token) => {
  const res = await fetch(url, { headers: { Authorization: "Bearer " + token } })
  if (res.status === 401 || res.status === 403) {
    return null
  }
  return res.json()
}

export function useUser() {

  const [session] = useSession();
  const authToken = session ? session.accessToken : null;
  const id = session ? session.id : null;

  const { data, error } = useSWR([`${process.env.NEXT_BASE_API_URL}beneficiary/${id}`, authToken], session ? fetcher : null);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }

}