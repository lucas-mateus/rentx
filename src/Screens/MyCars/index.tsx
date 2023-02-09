import React, { useEffect, useState } from "react";
import { Alert, StatusBar, Text } from "react-native";
import {
  Container,
  Header,
  Title,
  SubtitleHeader,
  Content,
  CarList,
  Appointments,
  AppointmentTitle,
  AppointmentQuantity,
  CarWrapper,
  CarFooterTitle,
  CarFooter,
  Period,
  StartDate,
  EndDate,
} from "./styles";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import { BackButton } from "../../components/BackButton";
import { Car } from "../../components/Car";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../styles/theme";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars({ navigation }) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fecthCars() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=100`);
        setCars(response.data);
      } catch (error) {
        Alert.alert("Erro ao carregar seus carros");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fecthCars();
  });
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleGoBack} />
        <Title>Seus agendamentos,{"\n"}estão aqui.</Title>
        <SubtitleHeader>Conforto, segurança e praticidade.</SubtitleHeader>
      </Header>

      <Content>
        <Appointments>
          <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
          <AppointmentQuantity>{cars.length}</AppointmentQuantity>
        </Appointments>
        {loading ? (
          <Load />
        ) : (
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car
                  data={item.car}
                  onPress={() => handleCarDetails(item.car)}
                />
                <CarFooter>
                  <CarFooterTitle>período</CarFooterTitle>
                  <Period>
                    <StartDate>{item.startDate}</StartDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.color.shapeDark}
                      style={{ marginHorizontal: 10 }}
                    />
                    <EndDate>{item.endDate}</EndDate>
                  </Period>
                </CarFooter>
              </CarWrapper>
            )}
          />
        )}
      </Content>
    </Container>
  );
}
