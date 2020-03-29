import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';  // Father icons
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [totalIncidents, setTotalIncidents] = useState(0);
    
    useEffect(() => {
        api.get('incidents')
            .then(response => {
                setIncidents(response.data);
                setTotalIncidents(response.headers['x-total-count']);
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>.
                </Text>
            </View>
            <Text style={styles.tittle}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

            <FlatList
                data={incidents}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl
                            .NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })
                            .format(incident.value)}</Text>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigation.navigate('Detail', { incident })}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" ></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
