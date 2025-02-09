import { CellTransaction } from "src/components/TransactionCell";
import Container from "../Container/Container";
import { Button, Dialog, minorScale, Pane } from "evergreen-ui";
import { useState } from "react";

interface CalendarWrapperProps{
  transactions: CellTransaction[]
}

const CalendarWrapper = ({transactions} :CalendarWrapperProps) => {

  const [isShown, setIsShown] = useState(false)


  return (
    <Container>
      <Pane className="h-full bg-blue-50" display="flex" flexDirection="column" gap={minorScale(4)}>
      <p> Testing</p>
      <Pane>
      <Dialog
        isShown={isShown}
        title="Add a new Transaction"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Save Transaction"
      >
        This is where the form will go.
      </Dialog>

      <Button onClick={() => setIsShown(true)}>Show Dialog</Button>
    </Pane>
      <Pane className="rounded bg-white p-4 grid place-items-center border h-full border-gray-300" display="flex" flexDirection="column"  flexGrow={1} gap={minorScale(4)}>




    <Pane className="w-full bg-red-50 h-full flex flex-col">

  <ol className="grid grid-cols-7 bg-gray-300 gap-[1px] border border-gray-300 h-full rounded">
    <li className="bg-white p-4 grid place-items-center">29</li>
    <li className="bg-white p-4 grid place-items-center">30</li>
    <li className="bg-white p-4 grid place-items-center">31</li>
    <li className="bg-white p-4 grid place-items-center">1</li>
    <li className="bg-white p-4 grid place-items-center">2</li>
    <li className="bg-white p-4 grid place-items-center">3</li>
    <li className="bg-white p-4 grid place-items-center">4</li>
    <li className="bg-white p-4 grid place-items-center">5</li>
    <li className="bg-white p-4 grid place-items-center">6</li>
    <li className="bg-white p-4 grid place-items-center">7</li>
    <li className="bg-white p-4 grid place-items-center">8</li>
    <li className="bg-white p-4 grid place-items-center">9</li>
    <li className="bg-white p-4 grid place-items-center">10</li>
    <li className="bg-white p-4 grid place-items-center">11</li>
    <li className="bg-white p-4 grid place-items-center">12</li>
    <li className="bg-white p-4 grid place-items-center">13</li>
    <li className="bg-white p-4 grid place-items-center">14</li>
    <li className="bg-white p-4 grid place-items-center">15</li>
    <li className="bg-white p-4 grid place-items-center">16</li>
    <li className="bg-white p-4 grid place-items-center">17</li>
    <li className="bg-white p-4 grid place-items-center">18</li>
    <li className="bg-white p-4 grid place-items-center">19</li>
    <li className="bg-white p-4 grid place-items-center">20</li>
    <li className="bg-white p-4 grid place-items-center">21</li>
    <li className="bg-white p-4 grid place-items-center">22</li>
    <li className="bg-white p-4 grid place-items-center">23</li>
    <li className="bg-white p-4 grid place-items-center">24</li>
    <li className="bg-white p-4 grid place-items-center">25</li>
    <li className="bg-white p-4 grid place-items-center">26</li>
    <li className="bg-white p-4 grid place-items-center">27</li>
    <li className="bg-white p-4 grid place-items-center">28</li>
    <li className="bg-white p-4 grid place-items-center">29</li>
    <li className="bg-white p-4 grid place-items-center">30</li>
    <li className="bg-white p-4 grid place-items-center">1</li>
    <li className="bg-white p-4 grid place-items-center">2</li>
  </ol>



    </Pane>

      </Pane>
      </Pane>
    </Container>
  );
};

export default CalendarWrapper;
