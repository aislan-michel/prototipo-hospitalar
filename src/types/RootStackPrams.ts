export type RootStackParamList = {
    Home: undefined;
    Formulario: undefined;
    Camas: { paciente: string };
    Cama: { paciente: string, numero: number };
    Posicoes: { paciente: string, numero: number };
    ControleSinais: { paciente: string, numero: number };
    DadosColetados: { paciente: string, numero: number };
};