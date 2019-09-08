import React, { Component } from "react";
import Header from "../components/header";
import RelativeLinks from "../components/relativeLinks";

class trade extends Component {
  render() {
    return (
      <div>
          <Header />
          <div style={{backgroundColor: "whitesmoke"}}>
        <h2 style={{textAlign: "center", paddingTop: "5%", fontSize: "80px"}}>Trade</h2>
       
        <br />
        <h1 style={{textAlign: "center"}}>Trade Zones</h1>
        <div style={{alignContent: "center", textAlign: "center"}}>
        <table style={{alignContent: "center"}}>
          <tr>
              <td>&nbsp;</td>
            <td style={{width: "23%", verticalAlign: "top", textAlign: "center"}}>
                  <a style={{textDecoration: "none", color: "black"}} href="https://www.lonelyplanet.com/trade/usa">The Americas</a><br/>
                      <img style={{maxHeight: "40%"}} src="http://www.ilass.org/2/images/map_big.png" alt="The Americas" />
                  </td>
                 <td style={{width: "23%", verticalAlign: "top", textAlign: "center"}}>
                  <a style={{textDecoration: "none", color: "black"}} href="https://www.lonelyplanet.com/trade/uk">UK & Europe</a><br/>
                      <img style={{maxHeight: "40%"}} src="https://p7.hiclipart.com/preview/810/128/1002/united-kingdom-vector-map-globe-europe.jpg" alt="The Americas" />
                  </td>
                 <td style={{width: "23%", verticalAlign: "top", textAlign: "center"}}>
                  <a style={{textDecoration: "none", color: "black"}} href="https://www.lonelyplanet.com/trade/aus">Australia, Asia, & Pacific</a><br/>
                      <img style={{maxHeight: "40%"}} src="https://p7.hiclipart.com/preview/962/885/168/east-asia-asia-pacific-pacific-ocean-middle-east-map-asia.jpg" alt="The Americas" />
                  </td>
                  <td style={{verticalAlign: "top", width: "17%", borderLeft: "1px #dae1e7 solid"}}>
              <RelativeLinks />
              </td>
                </tr>
        </table>
        </div>
       </div>
       <div style={{alignContent: "center", paddingLeft: "29%"}}>
  <img src="http://media.lonelyplanet.com/trade/img/map4.jpg" alt="map" />
      </div>
      </div>
    );
  }
}
 
export default trade;