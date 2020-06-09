import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { AppBar, Toolbar, Grid, Button } from '@material-ui/core'

import logo from '../images/logo-apontador.png'
import search from '../images/search.png'

import { LoadStateResultSearch, LoadStateSearchText } from '../actions/PlaceAction'
import { LoadStateRedirect, ResetRedirect } from '../actions/RedirectAction'

import { doSearch } from '../tasks/PlaceTask'

const Header = ({LoadStateResultSearch, redirect, LoadStateRedirect, ResetRedirect, LoadStateSearchText, search_text, doSearch}) => {

    //css
    const style = {
        header: {
            backgroundColor: '#ffffff',
            color: '#000000',
            paddingTop: '10px',
            paddingBottom: '10px'
        },
        grow: {
            flexGrow: '1'
        },
        btnSearch: {
            height: '45px',
            width: '45px',
            backgroundColor: '#FF8207',
            border: 0,
            borderTopRightRadius: '0.2em',
            borderBottomRightRadius: '0.2em',
            cursor: 'pointer',
            marginLeft: '-1px'
        },
        txtSearch: {
            border: '1px solid #FF8207',
            fontSize: 'medium',
            borderTopLeftRadius: '0.2em',
            borderBottomLeftRadius: '0.2em',
            paddingTop: '12px',
            paddingBottom: '10px',
            paddingLeft: '10px',
            width: '100%',
            maxWidth: '650px'
        },
        btnNewPlace:{
            color: '#693EBC',
            border: '1px solid #693EBC'            
        }
    }

    const handleSearchClick = () => {
        if(search_text)
            doSearch(search_text, 1, result_search=>{
                LoadStateRedirect({ to: "/" })
                LoadStateResultSearch(result_search)
                ResetRedirect()
            })
    }

    return (
        <Fragment>
            <AppBar style={style.header} position="fixed">
                <Toolbar >
                    <Grid container spacing={1} alignItems="center">                    
                        <Grid item xs={12} sm={3}>
                            <Link to="/" className="no-text-decoration">
                                <img src={logo} alt="Apontador"/>
                            </Link>
                        </Grid>                    
                        <Grid item xs={12} sm={6}>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input type="text" style={style.txtSearch} className="no-border-on-focus" onChange={e=>LoadStateSearchText(e.target.value)} value={search_text} />
                                <button style={style.btnSearch} className="no-border-on-focus" onClick={handleSearchClick}>
                                    <img src={search} alt="Search"/>
                                </button>                                
                            </div>                       
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Grid container justify="flex-end">
                                <Link to="/new-place" className="no-text-decoration">
                                    <Button variant="outlined" style={style.btnNewPlace}>Cadastre um local</Button>
                                </Link>                            
                            </Grid>                        
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            { redirect.to ? <Redirect to={redirect.to} /> : "" } 
        </Fragment>
    )
}

const mapStateToProps = state => ({
    redirect: state.RedirectReducer.redirect,
    search_text: state.PlaceReducer.search_text
});
  
const mapDispatchToProps = dispatch => {
    return {
        LoadStateResultSearch: result_search => dispatch(LoadStateResultSearch(result_search)),
        LoadStateRedirect: redirect => dispatch(LoadStateRedirect(redirect)),
        ResetRedirect: () => dispatch(ResetRedirect()),
        LoadStateSearchText: search_text => dispatch(LoadStateSearchText(search_text)),
        doSearch
    };
};

export default connect(
    mapStateToProps
    ,mapDispatchToProps
)(Header);