export const enableMock = async () => {
  const { worker } = await import("./browser");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
};
