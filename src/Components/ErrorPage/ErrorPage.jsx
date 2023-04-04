import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex justify-center items-center "
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-2xl font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-2xl font-semibold">
          <i>{error.statusText || error.message}!!!!</i>
        </p>
      </div>
    </div>
  );
}
