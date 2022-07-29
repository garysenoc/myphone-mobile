import {  StyleSheet } from 'react-native'

export const colors = {
    white: '#ffffff',
    black: '#263238',
    green: '#329F60',
    red: '#C04345',
    blue: '#0043F9',
    pink: '#F749A4',
    darkblue: '#383660',
    yellow: '##FFD426',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    mainbg: '#7B5FED',
}

export const Styles = StyleSheet.create({

    bodyTheme: {
        backgroundColor: '#fff',
        height:'100%',
        paddingHorizontal:15,
        fontFamily:'Montserrat-Black'
    },
    main:{
        paddingBottom:120
    },
    body:{
        color:'#070707',
        fontFamily:'MontserratAlternates-Regular',
        
    },
    inputField:{
        color:'#070707',
        fontSize:16,
        paddingLeft:10,
        width:'100%',
        height:'100%',
        fontFamily:'MontserratAlternates-Regular',
        
    },
    homeCard:{
        backgroundColor:'#F3F3F4',
        width:'100%',
        borderRadius:5,
        padding:15,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position: 'relative',
        maxWidth:'100%'
    },
    cardLeft:{
        maxWidth:'60%'
    },
    primaryText:{
        color:'#070707',
        fontSize:21,
        fontFamily:'Montserrat-MediumItalic',
        marginBottom:10
    },
    secondaryText:{
        color:'#070707',
        fontSize:18,
        fontFamily:'Montserrat-Italic',
    },
    homeTitle:{
        color:'#070707',
        fontSize:25,
        fontFamily:'Montserrat-SemiBold'
    },
    paragraph:{
        color:'#070707',
        fontSize:14,
        paddingVertical:10,
        fontFamily:'MontserratAlternates-Regular',
        opacity:.9
    },
    headerLink:{
        fontFamily:'Montserrat-SemiBold',
        color:'#070707',
        fontSize:16,
        paddingVertical:10
    },
    mainButton:{
        backgroundColor:'#D42828',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        marginVertical:10,
        maxWidth:'70%',
        display:'flex',
        justifyContent:'center',
    },
    genText:{
        fontFamily:'MontserratAlternates-Regular',
        color:'#070707',
        fontSize:16,
        paddingTop:10
    },
    homeBtn:{
        backgroundColor:'#BCE5FF',
        width:'80%',
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:8
    },
    mainButtonText:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
        fontFamily:'MontserratAlternates-Regular',
        
    },
    cardImage:{
        width:160,
        height:160,
        resizeMode:'contain'
    },


    //Sell Screen

    screenTitle:{
        color:'#070707',
        fontSize:20,
        paddingVertical:15,
        fontFamily:'Montserrat-SemiBold'
    },

    productCardList:{
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    productType:{
        width:'44%',
        marginBottom:20
    },

    productCard:{
        padding:1,
        width:'100%',
        borderRadius:20,
        marginBottom:4,
        borderWidth:1,
        borderColor:'#241D23',
        
    },
    productCardContent:{
        backgroundColor:'#fff',
        height:160,
        width:'100%',
        borderRadius:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        overflow: 'hidden',
    },
    productCardImage:{
        resizeMode:'contain',
        height:'53%',
        width:'100%',
        marginBottom:10
    },
    productTitle:{
        color:'#070707',
        fontSize:16,
        fontFamily:'Montserrat-SemiBold',
        
        
    },
    productCardIndividual:{
        padding:.5,
        width:'100%',
        borderRadius:5,
        marginBottom:15,
    },
    productCardIndividualImage:{
        resizeMode:'contain',
        height:'80%',
        width:'100%'
    },
    
    //Sell Details

    productDetailsImage:{
        width:'100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    productDetailCard:{
        width:'85%',

    },
    productDetailContentCard:{
        // backgroundColor:'#F3F3F4',
        height:170,
        width:'100%',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        overflow: 'hidden',
        marginTop:20
    },
    productSellImage:{
        resizeMode:'contain',
        height:'100%',
        width:'100%'
    },
    detailTitle:{
        color:'#070707',
        fontSize:18,
        paddingVertical:15,
        // fontFamily:'Montserrat-SemiBold',
        fontFamily:'MontserratAlternates-Regular',
        textTransform:'capitalize'
    },

    detailList:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        
    },
    detailButton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginBottom:10,
        borderRadius:5,
        minWidth:90,
        
        
    },
    detailButtonText:{
        color:'#070707',
        borderRadius:2,
        fontSize:14,
        paddingVertical:10,
        paddingHorizontal:10,
        fontFamily:'MontserratAlternates-Regular',
        textTransform:'capitalize',
        textAlign:'center',
    },
    messageField:{
        backgroundColor:'#F3F3F4',
        width:'100%',
        padding:15,
        borderRadius:5,
        textAlignVertical:'top',
        color:'#070707',
        fontSize:16,
        fontFamily:'MontserratAlternates-Regular',
    },
    detailGradientButton:{
        display:'flex',
        borderRadius:5, 
        width:'100%'
    },

    //Buy Details
    buyDetailContentCard:{
        // backgroundColor:'#0E0E0E',
        width:'100%',
        height:300,
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        overflow: 'hidden',
        
    },
    productColor:{
        width:37,
        height:37,
        borderRadius:30,
        marginRight:12,
        marginVertical:5,
    },

    //Repear
    productCardImageRepair:{
        resizeMode:'contain',
        height:'60%',
        width:'60%'
    },
    productCardContentRepair:{
        backgroundColor:'#F3F3F4',
        height:105,
        width:'100%',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        overflow: 'hidden',
    },
    productTypeRepair:{
        width:'30.3%',
        marginBottom:20
    },

    regularField:{
        backgroundColor:'#fff',
        width:'100%',
        paddingVertical:0,
        paddingHorizontal:0,
        borderRadius:5,
        color:'#070707',
        fontSize:16,
        fontFamily:'MontserratAlternates-Regular',
        marginBottom:15,

        borderBottomColor: '#AAAAAA',
        borderBottomWidth:1
    },

    boxCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'48%',
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'#070707',
        marginTop:30,
        borderRadius:1,
        position: 'relative',
        minHeight:120
    },
    boxImage:{
        width:30,
        height:30,
        padding:10,
        backgroundColor:'#fff',
        resizeMode:'contain',
        borderRadius:100,
        position:'absolute',
        left:20,
        top:-15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },


    //Cart
    tableContent:{
        color:'#fff'
    },
    tableRow:{
        borderWidth:.5,
        borderBottomColor:'#AAAAAA'
    },
    cartProductCard:{
        backgroundColor: '#E7E7E9',
        borderRadius:5,
        padding:15,
        width:'100%',
        minHeight:100,
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        position: 'relative',
        marginBottom:15
    },
    cartProduct:{
        maxWidth:'48%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cartText:{
        color:'#070707',
        fontSize:14,
        fontFamily:'MontserratAlternates-Regular',
    },

    //Test Screens
    testTextAlign:{
        display:'flex', 
        flexDirection:'row', 
        width:'100%', 
        justifyContent:'space-between'
    },
    testPopupText:{
        color:'#070707', 
        textAlign:'center',
        fontSize:16,
        fontFamily:'Montserrat-SemiBold',
        paddingVertical:20
    },
    testPopupBox:{
        backgroundColor:'#AAA8A4',  
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        minHeight:180, 
        width:'80%', 
        padding:20, 
        borderRadius:5
    },

    testTextCenter:{
        color:'#070707', 
        textAlign:'center',
        fontSize:16,
        fontFamily:'MontserratAlternates-Regular',
        paddingVertical:10,
        marginBottom:20
    },
    testIconBox:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        minHeight:220
    },
    testFooterBtn:{
        backgroundColor:'#2C8CD4',
        borderRadius:10,
        marginVertical:10,
        borderColor:'#fff',
        borderWidth:0,
        display:'flex',
        justifyContent:'center',
        width:100,
        marginTop:10, 
        paddingVertical:10,
    },


    checkButton:{
        backgroundColor:'#2C8CD4',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        marginVertical:10,
        display:'flex',
        justifyContent:'center',
        width:'95%'
    },
    testImage:{
        maxWidth:'90%',
        resizeMode:'contain'
    },


    summaryBtn:{
        borderWidth:.7,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginBottom:10
    },  

    damageBtn:{
        width:'100%', 
        display:'flex', 
        flexDirection:'row',
        paddingHorizontal:20,
        borderRadius:12, 
        justifyContent:'space-between', 
        backgroundColor:'#F1F1F1', 
        alignItems:'center',
        minHeight:50,
        marginBottom:10
    },










    //FOOTER
    footer:{
        backgroundColor:'#fff',
        padding:0,
        position: 'absolute',
        bottom:0,
        left:0,
        zIndex:1,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopWidth:.5,
        borderTopColor:'#DCDCDF'
    },
    footerButton:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'23%',
        height:'100%',
        paddingVertical:7

    },
    footerButtonText:{
        fontSize:10,
        fontFamily:'MontserratAlternates-Medium',
    },
    FooterButtonNotActive:{
        color:'#909090',
    },
    FooterButtonTextNotActive:{
        color:'#909090',
    },
    FooterButtonActive:{
        color:'#070707',
    },
    FooterButtonTextActive:{
        color:'#070707',
    }

  });