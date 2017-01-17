'use strict';

import React, { PropTypes } from 'react';
import { Tab, ProgressBar, Collapse, FormControl, FormGroup, ControlLabel, NavItem, Col, Nav, OverlayTrigger, Tooltip, PageHeader, Row, Button, ButtonToolbar } from 'react-bootstrap';
import Pictures from '../components/Pictures';

const MoreInfo = React.createClass({
    propTypes: {
        place: PropTypes.object
    },
    getInitialState(){
        return {
            open:false
        };
    },
    handleChange(e) {
        this.setState({ value: e.target.value });
    },
    render() {
        let { place } = this.props;
        let { open } = this.state;
        return (
            <Row className="container">
                <PageHeader>
                    Informações - <strong>{place.name}</strong> -  
                    <small>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Favoritar">Favoritar</Tooltip>}>
                            <span className="glyphicon glyphicon-heart-empty" title="Favoritar"></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Compartilhar">Compartilhar</Tooltip>}>
                            <span className="glyphicon glyphicon-send" title="Compartilhar"></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Carregar foto">Carregar Foto</Tooltip>}>
                            <span className="glyphicon glyphicon-cloud-upload" title="Carregar Foto"></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Avaliar">Avaliar</Tooltip>}>
                            <span className="glyphicon glyphicon-comment" title="Avaliar" onClick={() => this.setState({open:!open})}></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Curtir">Curtir</Tooltip>}>
                            <span className="glyphicon glyphicon-thumbs-up" title="Curtir"></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Eventos">Eventos</Tooltip>}>
                            <span className="glyphicon glyphicon-calendar" title="Eventos"></span>
                        </OverlayTrigger>
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Checkin">Checkin</Tooltip>}>
                            <span className="glyphicon glyphicon-map-marker" title="Checkin"></span>
                        </OverlayTrigger>                        
                        {' '}
                        <OverlayTrigger placement="top" overlay={<Tooltip id="Relatar Problema">Relatar Problema</Tooltip>}>
                            <span className="glyphicon glyphicon-exclamation-sign" title="Relatar Problema"></span>
                        </OverlayTrigger>
                    </small> 
                </PageHeader>
                <Row componentClass="section" className="actions-section container">
                    <div>
                        <Collapse in={this.state.open}>
                            <form>
                                <FormGroup controlId="formBasicText">
                                    <ControlLabel>Avaliar local</ControlLabel>{' '}
                                    <span key={1} className="glyphicon glyphicon-star-empty"></span>
                                    <span key={2} className="glyphicon glyphicon-star-empty"></span>
                                    <span key={3} className="glyphicon glyphicon-star-empty"></span>
                                    <span key={4} className="glyphicon glyphicon-star-empty"></span>
                                    <span key={5} className="glyphicon glyphicon-star-empty"></span>
                                    {' '}
                                    <small>Click nas estrelas...</small>
                                    <textarea className="form-control" col={6} rows={6} value={this.state.value} placeholder="Iniciar avaliação" onChange={this.handleChange} />
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" style={{backgroundColor:'#F17B03', borderColor:'#F17B03'}} bsSize="large" active>Avaliar!</Button>
                                        <Button bsSize="large" onClick={() => this.setState({open:!open})}>Cancelar</Button>
                                    </ButtonToolbar>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </form>
                        </Collapse>
                    </div>
                </Row>
                <Tab.Container id="more-info-tab" defaultActiveKey={1}>
                    <Row className="clearfix">
                        <Col sm={3}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey={1}>
                                    <span className="glyphicon glyphicon-info-sign"></span>
                                    {' '}
                                    Informações
                                </NavItem>
                                <NavItem eventKey={2}>
                                    <span className="glyphicon glyphicon-star"></span>
                                    {' '}
                                    Avaliações
                                </NavItem>
                                <NavItem eventKey={3}>
                                    <span className="glyphicon glyphicon-picture"></span>
                                    {' '}
                                    Fotos
                                </NavItem>
                                <NavItem eventKey={4}>
                                    <span className="glyphicon glyphicon-facetime-video"></span>
                                    {' '}
                                    Videos
                                </NavItem>
                                <NavItem eventKey={5}>
                                    <span className="glyphicon glyphicon-pushpin"></span>
                                    {' '}
                                    Mais informações
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey={1}>
                                    <div className="col-md-12">
                                        <p>O Parque Ibirapuera é o parque urbano mais importante da cidade de São Paulo e foi inaugurado dia 21 de agosto de 1954. No parque a população conta com ciclovia, treze quadras iluminadas,pistas destinadas a cooper, passeios e descanso, todas integradas à área cultural.</p>
                                        <p>
                                            <span className="glyphicon glyphicon-phone-alt"></span>
                                            {' '}
                                            <a href="tel:1155745045">(11) 5574-5045</a>
                                            / 
                                            <a href="tel:1155734180">(11) 5573-4180</a> 
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-bookmark"></span>
                                            {' '}
                                            <a href="http://www.parquedoibirapuera.com" target="_blank">http://www.parquedoibirapuera.com</a>
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-thumbs-up"></span>
                                            {' '}
                                            184 Pessoas recomendaram
                                        </p>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                    <div className="col-md-12 ratings-data">
                                        <Row className="col-md-2 text-center ratings-value">
                                            <Row>
                                                <h1>5</h1>
                                            </Row>
                                            <Row>
                                                <span key={1} className="glyphicon glyphicon-star"></span>
                                                <span key={2} className="glyphicon glyphicon-star"></span>
                                                <span key={3} className="glyphicon glyphicon-star"></span>
                                                <span key={4} className="glyphicon glyphicon-star"></span>
                                                <span key={5} className="glyphicon glyphicon-star"></span>
                                            </Row>
                                            <Row>{place.statistics.reviews} avaliações</Row>
                                        </Row>  
                                        <Row className="col-md-10">
                                            <ProgressBar bsStyle="success" now={95} />
                                            <ProgressBar bsStyle="info" now={50} />
                                            <ProgressBar bsStyle="warning" now={40} />
                                            <ProgressBar bsStyle="danger" now={20} />
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={3}>
                                    <Pictures place={place} />
                                </Tab.Pane>
                                <Tab.Pane eventKey={4}>
                                    <h3>Nenhum video encontrado!</h3>
                                </Tab.Pane>
                                <Tab.Pane eventKey={5}>
                                    <div className="col-md-12">
                                        <p>
                                            <span className="glyphicon glyphicon-globe"></span>
                                            {' '}
                                            {place.address.street}, {place.address.number}, {place.address.complement}, {place.address.district}
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-pushpin"></span>
                                            {' '}
                                            {place.address.city} - {place.address.state} , CEP: {place.address.zipcode}
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-time"></span>
                                            {' '}
                                            Hoje: 05:00 às 00:00
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-flag"></span>
                                            {' '}
                                            Categorias: {place.categories.map((current) => (<span key={current.id}>{current.name}</span>))}
                                        </p>
                                        <p>
                                            <span className="glyphicon glyphicon-tags"></span>
                                            {' '}
                                            Tags: {place.tags.map((current, index) => (<span key={index}>{' '}{current.value}</span>))}
                                        </p>
                                        <p><i>Cadastrado por: <a>Apontador</a></i></p>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
        );
    }
});

export default MoreInfo;