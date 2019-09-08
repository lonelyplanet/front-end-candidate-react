import React, { Component } from "react";
import Header from "../components/header";

class newsroom extends Component {
  render() {
    return (
      <div>
          <Header />
          <div style={{backgroundColor: "whitesmoke"}}>
        <h2 style={{textAlign: "center", paddingTop: "5%", fontSize: "80px"}}>Press</h2>
        <p  style={{textAlign: "center", paddingLeft: "20%", paddingRight: "20%", fontSize: "20px", lineHeight: "28px"}}>
          As the world's leading travel authority, Lonely Planet can provide expert comment and advice for travel
           and business media. Find our latest news and releases below, as well as contact details for our press
            offices around the globe to arrange interviews with our worldwide team of destination experts, receive
             details about the business or request images and review copies.
             <br /><br/>
             <p style={{borderBottom: "1px #dae1e7 solid"}}></p>
        </p>
        <br />
        <h1 style={{textAlign: "center"}}>Latest Releases</h1>
        <div style={{paddingLeft: "10%", paddingRight: "20%"}}>
        <table >
          <tr>
            <td style={{width: "69%", verticalAlign: "top"}}>
              <table>
                <tr>
                  <td style={{fontSize: "18px"}}>
                  Margaret River & Southern WA Tops Lonely Planet’s Best in Asia Pacific 2019<br/>
<a style={{fontSize: "10px", color: "grey"}}>JULY 19</a>
                  </td>
                </tr>
                <tr>
                  <td style={{fontSize: "18px"}}>
                    Lonely Planet reveals the top European destinations for summer 2019<br/>
<a style={{fontSize: "10px", color: "grey"}}>MAY 19</a>
                  </td>
                </tr>
                <tr>
                  <td  style={{fontSize: "18px"}}>
                  Lonely Planet’s best travel destinations for 2019 revealed<br/>
<a style={{fontSize: "10px", color: "grey"}}>OCTOBER 2018</a>
                  </td>
                </tr><tr>
                  <td  style={{fontSize: "18px"}}>
                  Lonely Planet experts name top 5 travel trends for 2019<br/>
<a style={{fontSize: "10px", color: "grey"}}>OCTOBER 2018</a>
                  </td>
                </tr>
                <tr>
                  <td  style={{fontSize: "18px"}}>
                   Pintxos in San Sebastián named world’s #1 food experience in Lonely Planet’s Ultimate Eatlist<br/>
<a style={{fontSize: "10px", color: "grey"}}>AUGUST 18</a>
                  </td>
                </tr>
              </table>
            </td>
            <td style={{width: "10%"}}>&nbsp;</td>
            <td style={{verticalAlign: "top"}}>
              <a style={{fontSize: "14px"}}><b>Contact Us</b></a><br/>
              <a style={{fontSize: "14px"}}>Americas:</a><br/>
                <a style={{fontSize: "14px", textDecoration: "none", color: "#327AAF"}} href = "mailto: pressusa@lonelyplanet.com">pressusa@lonelyplanet.com</a><br/>
<p style={{fontSize: "12px"}}>(+1) 510-250-6400</p>
<a style={{fontSize: "14px"}}>EMEA:</a><br/>
<a  style={{fontSize: "14px", textDecoration: "none", color: "#327AAF"}} href = "mailto: pressuk@lonelyplanet.com">pressuk@lonelyplanet.com</a><br/>
<p style={{fontSize: "12px"}}>(+44) 0 203 771 5144</p>
<a style={{fontSize: "14px"}}>APAC:</a><br/>
<a  style={{fontSize: "14px", textDecoration: "none", color: "#327AAF"}} href = "mailto: pressapac@lonelyplanet.com">pressapac@lonelyplanet.com</a><br/>
<p style={{fontSize: "12px"}}>(+61) 3 8379 8000</p>
<a style={{fontSize: "14px"}}><b>Spokespeople</b></a><br/>
<a  style={{fontSize: "14px", textDecoration: "none", color: "#327AAF"}} href = "https://lonelyplanetstatic.imgix.net/marketing/about/lonely_planet_media_spokespeople.pdf">View profiles</a><br/><br/>
<a style={{fontSize: "14px"}}><b>Lonely Planet Support</b></a><br/>
<a style={{fontSize: "14px", textDecoration: "none", color: "#327AAF"}} href = "https://support.lonelyplanet.com/hc/en-us">FAQ's</a>
            </td>
          </tr>
        </table>
        </div>
       </div>
      <div class="container">
  <img href="https://www.lonelyplanet.com/about/story" src="https://lonelyplanetstatic.imgix.net/copilot/images/U3RvcnlJbWcuanBnV2VkIE1hciAyOSAyMDE3IDE1OjAwOjA0IEdNVCswMDAwIChVVEMp.jpg" alt="Snow" style={{width: "100%;"}} />
</div>
      </div>
    );
  }
}
 
export default newsroom;