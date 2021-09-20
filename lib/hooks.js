import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR("https://redeemfund-api.herokuapp.com/api/register", fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}