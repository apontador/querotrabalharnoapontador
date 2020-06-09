import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

import { Grid, Paper, Container, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import { ResetRedirect } from '../actions/RedirectAction'
import { LoadStateResultSearch } from '../actions/PlaceAction'

import { doSearch } from '../tasks/PlaceTask'

const SearchCard = ({payload}) => {

    const style = {
        paper: {
            maxWidth: '500px',
            padding: '10px'
        }
    }
    
    return(
        <Paper style={style.paper}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6">{payload.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">{payload.address}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">{`Telefone: ${payload.phone}`}</Typography>
                </Grid>
            </Grid>            
        </Paper>
    )
}

const Home = ({result_search, redirect, ResetRedirect, LoadStateResultSearch, doSearch}) => {

    /*
    const [page] = React.useState(1)

    useEffect(() => {
        if(redirect.to !== "")
            ResetRedirect()
    },[page]);    
    */

    const handlePageChange = (e, page) => {
        doSearch(result_search.search_text, page, result_search=>{LoadStateResultSearch(result_search)})
    }

    return (
        <Container style={{paddingTop:"100px"}}>
            {
                result_search.places.length ? (
                    <Grid container spacing={2} justify="center" style={{marginBottom:"30px"}}>
                        {result_search.places.map((place, key) => {
                            return(
                                <Grid item xs={12} key={key}>
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <SearchCard payload={place} />
                                    </div>                          
                                </Grid>
                            )
                        })}
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <Pagination count={Math.ceil(result_search.matches/10)} defaultPage={result_search.current_page} onChange={handlePageChange} />                                
                            </Grid>                    
                        </Grid>                
                    </Grid>
                ) : (
                    <Grid container style={{marginTop: "20px"}}>
                        { result_search.search_text ? (
                            <Typography variant="h6">{`Sua busca por "${result_search.search_text}" nao obteve retorno`}</Typography>
                        ): "" }
                    </Grid>
                )
            }            
        </Container>
    )
}

const mapStateToProps = state => ({    
    redirect: state.RedirectReducer.redirect,
    result_search: state.PlaceReducer.result_search    
});
  
const mapDispatchToProps = dispatch => {
    return {
        ResetRedirect: () => dispatch(ResetRedirect()),
        LoadStateResultSearch: result_search => dispatch(LoadStateResultSearch(result_search)),
        doSearch
    };
};

export default connect(
    mapStateToProps
    ,mapDispatchToProps
)(Home);