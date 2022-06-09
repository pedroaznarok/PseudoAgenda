import { Component } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import AgendaContacto from "./components/pages/AgendaContacto/agendaContacto";
import { FormularioAgenda } from "./components/pages/FormularioAgenda/formularioAgenda";
import TablaAgenda from "./components/pages/TablaAgenda/tablaAgenda";
import Navigation from "./components/shared/navbar/navigation";
// element={<FormularioAgenda/>} />

class AppRoutes extends Component {
    render() {
        return(
            <>
            <Navigation></Navigation>
            <Container>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/agenda" element={<AgendaContacto/>} />
                    <Route path="/formulario" element={<FormularioAgenda/>} />
                    <Route path="/formulario/:id" element={<FormularioAgenda /> } />

                    <Route path="/tabla" element={<TablaAgenda/>} /> 
                </Routes>
            </Container>
            </>
        )
    }
}

export default AppRoutes;