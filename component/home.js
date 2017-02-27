import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import '../style/basicStyle'
var style = require('../style/basicStyle');
import json_data from '../data/category';
import {
    View,
    Text,
    StyleSheet,
    ToolbarAndroid,
    Dimensions,
    ListView,
    ScrollView,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    Image
} from 'react-native';
export class Home extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(json_data)
        };
        this._sendDataforward = this._sendDataforward.bind(this);
    }
    _sendDataforward(data) {
        let cat = data.case;
        this.props.navigator.push({
            name: "subcategory",
            payload: {
                name: cat
            }
        })
    }
    render() {
        var {width, height} = Dimensions.get('window');
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: STRING.GreyColor
            }}>
                <Icon.ToolbarAndroid logo={require('../img/genie-logo-g.png')} title='' style={style.toolbar} titleColor='white' overflowIconName="md-more" actions={[
                    {
                        title: 'fav',
                        iconName: 'md-notifications',
                        iconSize: 25,
                        show: 'always'
                    }, {
                        title: 'Login',
                        iconSize: 25
                    }
                ]}></Icon.ToolbarAndroid>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        marginLeft: 15,
                        marginRight: 15,
                        marginTop: 10
                    }}>
                        <View style={{
                            flex: 1,
                            marginTop: 5,
                            backgroundColor: 'white'
                        }} elevation={3}>
                            <View style={{
                                flex: 1,
                                marginLeft: 20,
                                marginTop: 3,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Icon name="md-search" size={25} color="black" style={{
                                    flex: .1,
                                    marginLeft: 10,
                                    flexDirection: 'column',
                                    alignSelf: 'center'
                                }}/>
                                <TextInput autoCapitalize="words" style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    marginLeft: 8
                                }} underlineColorAndroid='rgba(0,0,0,0)' returnKeyType={"next"} placeholder={"Search product to get Lowest prize"} onChangeText={(text) => this.setState({name: text})}></TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={{
                                marginTop: 5,
                                fontSize: 15
                            }}>Shop by Category</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            marginTop: 8,
                            marginBottom: 8,
                            flexDirection: 'column'
                        }}>
                            <ListView style={styles.container} dataSource={this.state.dataSource} renderRow={(data, key) => <TouchableOpacity key={key} onPress={() => this._sendDataforward(data)} style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                justifyContent: 'space-around',
                                borderBottomWidth: 2,
                                borderBottomColor: STRING.GreyColor
                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    margin: 20
                                }}>
                                    <Image style={{
                                        flex: .2,
                                        alignSelf: 'center'
                                    }} resizeMode="contain" source={data.image}></Image>
                                    <Text style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        alignSelf: 'center',
                                        marginTop: 1,
                                        marginLeft: 10
                                    }}>{data.name}</Text>
                                    <Icon name="ios-arrow-forward-outline" size={25} color={STRING.GreyColor} style={{
                                        marginTop: 3,
                                        marginRight: 10
                                    }}/>
                                </View>
                            </TouchableOpacity>}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({});
