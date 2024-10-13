import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error!</h1>
      <p>An unexpected error has occurred:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}