import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import getStore from "@/core/actions/store";
import { Typography } from "@mui/material";
import TabMenu from "./ui/TabMenu";

export default async function StorePage() {
  const session = await getServerAuthSession();
  const store = await getStore(session?.user.id as string);

  return (
    <section className="h-screen mx-5">
      <section className="py-5 px-2">
        <Typography variant="h6">Bem-vindo</Typography>
        <Typography variant="h4">{store?.name}</Typography>
      </section>
      <section className="bg-white rounded-t-2xl p-3 h-full">
        <TabMenu />
      </section>
    </section>
  );
}
