import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    handleClose: () => void
}

export function CreateAgenda({ handleClose }: Props) {

    const [agendaName, setAgendaName] = useState('');
    const [uidAdm, setUidAdm] = useState('');
    const cadastrarAgenda = async () => {
        const nome = encodeURIComponent(agendaName);
        const uid = encodeURIComponent(uidAdm);
        const chave = encodeURIComponent(process.env.EXPO_PUBLIC_API_KEY ?? "");

        const url = `${process.env.EXPO_PUBLIC_API_URL}/add/agenda/?nome_agenda=${nome}&uid_do_responsavel=${uid}&api_key=${chave}`;

        try {
            const response = await fetch(url, {
                method: "POST",
            });

            const json = await response.json();
            console.log("Resposta da API:", json);
        } catch (error) {
            console.log("Erro ao cadastrar:", error);
        }
    };

    function saveAndClose(){
        cadastrarAgenda();
        handleClose();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleClose}>
                    <Ionicons size={30} color={"purple"} name={"arrow-back-outline"} />
                </TouchableOpacity>
                <Text style={{ fontSize: 25 }}>Criar Agenda</Text>
            </View>
            <View style={{ gap: 20 }}>
                <View>
                    <Text style={styles.titleInput}>Nome</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Digite o nome da agenda'
                        value={agendaName}
                        onChangeText={setAgendaName}
                    />
                </View>
                <View>
                    <Text style={styles.titleInput}>ID</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Digite o ID do responsável pela agenda'
                        value={uidAdm}
                        onChangeText={setUidAdm}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={saveAndClose} style={styles.button}>
                <Ionicons size={17} color={"#FFF"} name={"arrow-forward-outline"} />
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "3%"
    },

    header: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        paddingBottom: 30,
        height: 80
    },

    textInput: {
        width: "99%",
        height: 47,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: "rgba(96, 39, 170, 0.6)",
        borderRadius: 4
    },

    titleInput: {
        paddingLeft: 15,
        color: "rgba(96, 39, 170, 0.6)"
    },

    button: {
        height: 50,
        width: 130,
        gap: 10,
        backgroundColor: "#b686f4",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        position: "absolute",
        right: 20,
        bottom: 20,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 17,
    }
})
