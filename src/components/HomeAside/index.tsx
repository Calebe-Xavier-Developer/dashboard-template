import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { buyIntention } from '../../utils/arrays';
import iconHelp from '../../assets/icons/ic-help.svg';
import { AsideContainer, IntentionCol, IntentionDiv, IntentionRow, IntentionList, IntentionText, GraphDiv, GraphCol, DataDiv } from './styles';

export const HomeAside = () => {

  const intentionList = buyIntention.map(item => (
    <IntentionList key={item.id}>
      <IntentionCol>
        <IntentionRow>
          <img src={item.image} alt={item.name} width="36px" height="36px" />
          <IntentionText>{ item.name}</IntentionText>
        </IntentionRow>
      </IntentionCol>
      <IntentionCol><IntentionText>{ item.rating}</IntentionText></IntentionCol>
    </IntentionList>
  ));

  return (
    <AsideContainer>
      <IntentionDiv>
        <span>Top intenções de compra</span>
        {intentionList}
      </IntentionDiv>
      <GraphDiv>
        <GraphCol>
          <span>
            Preços - Dryve x KBB
            <img src={iconHelp} alt="Icone de Ajuda" width="16px" height="16px" />
          </span>
          <PieChart
            style={{ width: "155px" }}
            lineWidth={20}
            startAngle={270}
            viewBoxSize={[115,115]}
            data={[
              { title: 'One', value: 60, color: '#1070ca' },
              { title: 'Two', value: 25, color: '#ec4c47' },
              { title: 'Three', value: 15, color: '#f7d154' },
            ]}
          />
        </GraphCol>
        <DataDiv>
          <div><span style={{ backgroundColor: "#1070ca"}}></span>Na média<p>60%</p></div>
          <div><span style={{ backgroundColor: "#ec4c47"}}></span>Acima da média<p>25%</p></div>
          <div><span style={{ backgroundColor: "#f7d154"}}></span>Abaixo da média<p>15%</p></div>
        </DataDiv>
      </GraphDiv>
    </AsideContainer>
  )
}
