import { RadioTypes } from "../types"


export const RadioAndLabel = ({radio, handler, radioSelected }:{radio:RadioTypes, handler:Function, radioSelected: RadioTypes}) => {
  return (
    <>
    <label htmlFor={"radio_"+radio}>{radio}</label><input type="radio" name="dropdownlist" id={"radio_"+radio} onChange={() => handler({radio})} checked={radioSelected === radio} />
    </>
 )
}
