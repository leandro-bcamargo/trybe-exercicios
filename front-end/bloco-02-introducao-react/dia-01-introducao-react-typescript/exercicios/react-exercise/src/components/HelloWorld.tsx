import calculateAge from "../utils/calculateAge";
import ModuleDetails from "./ModuleDetails";
import Title from "./Title";

export default function HelloWorld() {
  return (
    <>
    <Title />
    <ModuleDetails />
    <h3>{`My current age is ${calculateAge(new Date('02-14-1989'))}`}</h3>
    </>
  )
}