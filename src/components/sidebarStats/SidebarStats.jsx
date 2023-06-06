
import { Link } from "wouter"
import '../sidebarStats/sidebarStats.css';

import { DateRangePicker } from 'rsuite';
import { Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import OptionButton from "../optionButton/OptionButton"

const { allowedMaxDays, allowedDays, allowedRange, beforeToday, afterToday, combine } =
  DateRangePicker;

 

export default function SidebarStats() {


  return (
    <section className="sidebar">
      <Link href={""}>Fecha</Link>
      <DateRangePicker disabledDate={allowedMaxDays(7)} character=' hasta ' format='dd/MM/yy' size='md' />
      <Link href={""}>Parqueadero</Link>
      <OptionButton></OptionButton>
      <Link href={""}>Movistar Arena</Link>
      <Button color="orange" appearance="primary">Search</Button>
    </section>
  )
}