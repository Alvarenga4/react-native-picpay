import React, {useState} from 'react';
import {Switch} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import credit_card from '../../images/credit-card.png';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddContainer,
  AddLabel,
  UseTicket,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(false);

  return (
    <>
      <Wrapper>
        <Header colors={['#52e78c', '#1ab562']}>
          <HeaderContainer>
            <Title>Saldo Picpay</Title>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '-,--'}</Bold>
              </Value>

              <EyeButton onPress={() => setIsVisible(!isVisible)}>
                <Feather
                  name={isVisible ? 'eye' : 'eye-off'}
                  size={28}
                  color="#fff"
                />
              </EyeButton>
            </BalanceContainer>

            <Info>Seu saldo está rendendo 100% do CDI</Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Banco</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
          <Switch
            trackColor={{false: '#767577', true: '#52e78c'}}
            thumbColor={useBalance ? '#52e78c' : '#f4f3f4'}
            value={useBalance}
            onValueChange={() => setUseBalance(!useBalance)}
          />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>formas de pagamento</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartao de crédito</CardTitle>
                <CardInfo>
                  Cadastre seu cartão de crédito para fazer pagamento mesmo
                  quando tiver saldo no seu Picpay
                </CardInfo>
              </CardDetails>

              <Img resizeMode="contain" source={credit_card} />
            </CardBody>

            <AddContainer>
              <AntDesign name="pluscircleo" size={28} color="#0db060" />
              <AddLabel>Adicionar cartão de crédtio</AddLabel>
            </AddContainer>
          </Card>

          <UseTicket>
            <UseTicketButton>
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#0db060"
              />
              <UseTicketLabel>Usar código promocional</UseTicketLabel>
            </UseTicketButton>
          </UseTicket>
        </PaymentMethods>
      </Wrapper>
    </>
  );
};

export default Wallet;
