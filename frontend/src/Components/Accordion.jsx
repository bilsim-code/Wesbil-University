import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdLocationOn, MdOutlineArrowDropDown } from "react-icons/md";
import { FaLaptop, FaPen, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Questions = () => {
  const accordionItems = [
    {
      image: <MdLocationOn />,
      heading: "Where are you located?",
      details:
        "We are located just outside your house.Peep through the window and you will see us!!",
      link: ""  
    },
    {
      image: <FaLaptop />,
      heading: "Do you offer online classes?",
      details:
        "Yes, we offer online classes.To access and be able to apply,",
      link: 'click here',
      route: "online-classes"  
    },
    {
      image: <FaPen />,
      heading: "How do I apply to join you?",
      details:
        "To join us, fill the student application form and wait for our response.",
      link: "click here to apply",
      route: "online-application"
    },
    {
      image: <FaPlus />,
      heading: "Are there any new programs to enroll in?",
      details: "To see our new programs, ",
      link: "click here",
      route: "new-programs"
    },
  ];
  return (
    <div>
      <div className="flex justify-center w-full px-3 nav-ul-md:px-0 max-w-3xl mx-auto items-center mt-10 mb-8">
        <hr className="bg-gray flex-1" />{" "}
        <h1 className="mx-4 text-2xl font-medium">
          Frequently Asked Questions{" "}
        </h1>
        <hr className="bg-gray flex-1" />
      </div>

      <Accordion
        className="w-11/12 nav-ul-md:w-1/2 p-2 mx-auto rounded-md "
        allowMultipleExpanded={false}
        preExpanded={[0]}
      >
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} uuid={index}>
            <AccordionItemState>
              {({ expanded }) => (
                <div
                  className={`border mb-2 p-2 rounded-md ${expanded ? "shadow-md border-0 shadow-blue-shade-1" : "collapsed"}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center mb-2 text-blue-shade-1">
                      <div>{item.image}</div>
                      <div className="flex-1 ml-6 text-lg">{item.heading}</div>
                      <div>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <span className="px-10 block">{item.details}</span>
                    <Link to={`/${item.route}`} className="block px-10 text-royalblue underline">{item.link}</Link>
                  </AccordionItemPanel>
                </div>
              )}
            </AccordionItemState>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Questions;
