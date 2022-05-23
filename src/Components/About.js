import React from 'react'
import styled from 'styled-components';

const MainText = styled.text`
    font-size: medium;
    font-family: Georgia, Courier;
    color: #554a4d;
`;

const About = () => {
  return (
    <div style={{padding: '10px'}}>
      <MainText>
      <h1>About company</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque odio deserunt illum dignissimos optio quos fugiat omnis fugit sint quasi enim natus officiis vitae a, <br />
      beatae fuga atque dolorem quam itaque? Neque sed quos, quam facilis incidunt sequi commodi! <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis harum est sed tempora vitae sint error similique. Tempore eveniet vel sit voluptate, quos quaerat dolorem <br />
      nostrum non ex unde. Cumque esse odio modi impedit quasi obcaecati nemo! Quidem aspernatur recusandae ea tempore esse at dolore numquam, quo architecto rem. <br />
      Asperiores accusantium inventore mollitia nulla numquam libero, ipsam molestias quos accusamus quas eos neque voluptatibus eveniet minus, dolorem non facere quasi?
      </p>
      </MainText>
    </div>
  )
}

export default About
