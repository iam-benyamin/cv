import { DefaultLayout } from "../../components/layout/defaultLayout";

export function Home() {
  document.title = "Home";
  return (
    <DefaultLayout>
      <h2>خانه</h2>
    </DefaultLayout>
  );
}
