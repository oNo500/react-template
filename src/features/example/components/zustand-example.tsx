import { Button } from "@/components/ui/button";
import { create } from "zustand";

type State = {
  bears: number;
};
type Action = {
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

const useStore = create<State & Action>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

const BearCount = () => {
  const bears = useStore((state) => state.bears);
  return <p>{bears} around here...</p>;
};
const Controls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <div>
      <Button onClick={increasePopulation}>one up</Button>
      <Button onClick={removeAllBears}>remove all</Button>
    </div>
  );
};
const ZustandExample = () => {
  return (
    <div>
      <h2>Zustand Example</h2>
      <BearCount />
      <Controls />
    </div>
  );
};

export { ZustandExample };
