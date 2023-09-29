import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForecastWeather.css";

const weekDays = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const ForecastWeather = ({ data }) => {
  return (
    <>
      <label className="title">Günlük Tahmin</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="daily-forecast"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day"></label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;

//? allowZeroExpanded: Accordion'daki itemlerin hepsini kapalı tutabileceğimizi gösterir.
//? allowMultipleExpanded: Accordion'daki itemlerden birisini muhakkak açık kalır. Başka bir tane açmadan onu kapatamazsınız.

//? AccordionItemHeading: Dropdown kapalıyken görünecek olan,
//? AccordionItemPanel: Dropdown açıkken görünecek olan.
