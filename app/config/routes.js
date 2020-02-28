import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {CurrencyList, Home, Options, Themes, LoginScreen} from '../screens';
import { connect } from 'react-redux';


const homestack = createStackNavigator (
    {
        home: {
            screen: Home,
            navigationOptions: {
                headerShown: false,
            }
        },
        option: {
            screen: Options,
            navigationOptions: ( {navigation} ) => ({
                title: 'Option',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
                headerStyle: {
                    backgroundColor: navigation.state.params.color,
                },
                headerTintColor: '#FFFFFF',
            }),
        },
        theme: {
            screen: Themes,
            navigationOptions: ( {navigation} ) => ({
                title: 'Themes',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
                headerStyle: {
                    backgroundColor: navigation.state.params.color,
                },
                headerTintColor: '#FFFFFF',
            }),
        },
    },
    {
        initialRouteName: 'home',
    }
);  

const stack = createStackNavigator(
    {
        home: {
            screen: homestack,
            navigationOptions: {
                headerShown: false,
            }
        },
        List: {
            screen: CurrencyList,
            navigationOptions: ({navigation}) => ({
                headerTitle: navigation.state.params.title,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                },
                headerStyle: {
                    backgroundColor: navigation.state.params.color,
                },
                headerTitleAlign: 'center',
                headerLeft: () => null,
            })
        },
    },
    {
        initialRouteName: 'home',
        mode: 'modal'
    }
);

const containerStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        Home: {
            screen: stack,
            navigationOptions: {
                headerShown: false,
            }
            
        }
    },
    {
        initialRouteName: 'Login',
    }
)

const mapStateToProps = state => {
    return {
        color: state.themes.primaryColor,
    };
};

export default connect(mapStateToProps) (Navigation = createAppContainer(containerStack)); 