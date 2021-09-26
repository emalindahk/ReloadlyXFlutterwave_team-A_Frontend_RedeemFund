import useSWR from "swr";
import { useSession } from "next-auth/client";

const fetcher = (url, token) => fetch(url, { headers: { Authorization: "Bearer " + token } }).then((r) => r.json());

export function useUser() {

  const [session] = useSession();
  const authToken = session ? session.accessToken : null;
  const id = session ? session.id : null;
  const { data, error } = useSWR([`https://redeemfund-api.herokuapp.com/api/beneficiary/${id}`, authToken], fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }

}