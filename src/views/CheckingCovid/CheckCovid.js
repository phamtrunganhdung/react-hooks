import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "../CheckingCovid/CheckCovid.scss";
const CheckCovid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  let today = new Date();
  let preDay = new Date();
  let priorDate = new Date(preDay.setDate(preDay.getDate() - 30));
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let backDate =
    priorDate.getFullYear() +
    "-" +
    (priorDate.getMonth() + 1) +
    "-" +
    priorDate.getDate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // == ComponentDidMount()
    setTimeout(async () => {
      let res = await axios.get(
        `https://api.covid19api.com/country/vietnam?from=${backDate}T00%3A00%3A00Z&to=${date}T00%3A00%3A00Z`
      );
      let data = res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        data = data.reverse();
      }
      setDataCovid(data);
      setLoading(false);
    }, 500);
  }, [backDate, date]);

  return (
    <div>
      <h3>
        Checking Covid in VietNam from {backDate} to {date}
      </h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {loading === false && dataCovid && dataCovid.length > 0 ? (
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="loading" colSpan="5">
                Loading ...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CheckCovid;
