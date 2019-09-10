import React, { Component } from "react";
import Header from "../components/header";
import RelativeLinks from "../components/relativeLinks";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Helmet from "react-helmet";

class contact extends Component {
  render() {
    return (
      <div>
        <Helmet><title>Contact Us</title></Helmet>
          <Header />
          <div style={{backgroundColor: "whitesmoke"}}>
        <h2 style={{textAlign: "center", paddingTop: "5%", fontSize: "80px"}}>Contact Us</h2>
       
        <br />
        <div style={{alignContent: "center", textAlign: "center"}}>
<CardDeck>
    <table>
        <tr>
            <td>&nbsp;</td>
            <td style={{verticalAlign: "top"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="Guidebooks" src="https://www.unchartedbackpacker.com/wp-content/uploads/2016/01/The-Variety-2-730x659.jpg" />
  <Card.Body>
    <Card.Title><b>Guidebook Feedback</b></Card.Title>
    <Card.Text style={{fontSize: "14px"}}>
      Got something to say about our guidebooks? We'd love to hear your suggestions, corrections, compliments and complaints.
    </Card.Text>
    <Button variant="primary">Guidebook Feedback</Button>
  </Card.Body>
</Card>
            </td>
            <td style={{verticalAlign: "top"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="Guidebooks" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMsXJU-X3xWaJr_FugbaUJH73vdcg9wtebH462_u44e8xyMlw" />
  <Card.Body>
    <Card.Title><b>Help & Support</b></Card.Title>
    <Card.Text style={{fontSize: "14px"}}>
       Signing in / Registering on our website<br/>
       Online shop orders<br/>
       Travel BookingseBooks & Mobile apps<br/>
       A mistake on our website<br/>
       Magazine & Newsletter subscriptions<br/>
       Thorn Tree Forum
       <br/><br/>
    </Card.Text>
    <Button variant="primary">Help & Support</Button>
  </Card.Body>
</Card>
            </td>
            <td style={{verticalAlign: "top"}}>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="Guidebooks" src="https://lonelyplanetstatic.imgix.net/copilot/images/b2ZmaWNlLTEuanBnV2VkIE1hciAyOSAyMDE3IDE0OjU5OjM1IEdNVCswMDAwIChVVEMp.jpg" />
  <Card.Body>
    <Card.Title><b>Your Business</b></Card.Title>
    <Card.Text style={{fontSize: "14px"}}>
      Do you have a business you'd like listed in Lonely Planet? Let us know and we'll pass it on to our authors to check out.
<br/>
Are you already listed but need to update your details? Do it right here.
    </Card.Text>
    <br/>
    <Button variant="primary">Business Listings</Button>
  </Card.Body>
</Card>
            </td>
        </tr>
    </table>
</CardDeck>

           
                
                
        </div>
       </div>
      </div>
    );
  }
}
 
export default contact;