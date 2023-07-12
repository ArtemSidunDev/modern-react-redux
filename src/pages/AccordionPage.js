import Accordion from "../components/Accordion";


function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Item 1',
      content: 'Item 1 content'
    },
    {
      id: 2,
      label: 'Item 2',
      content: 'Item 2 content'
    },
    {
      id: 3,
      label: 'Item 3',
      content: 'Item 3 content'
    }
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage