/**
 * @author Fábio Pereira <fabio.pereira.gti@gmail.com>
 * @flow
 */
import {Navigation} from 'react-native-navigation';
import Colors from '~/lib/Colors';
import Images from '~/lib/Images';
import Logger from '~/services/Logger';
import Dictionary from './Dictionary';

class Navigator {
    static views = {...Dictionary};

    static navigateToAndSetStackRoot(from: string, to: string): void {
        (async () => {
            try {
                await Navigation.setStackRoot(from, {
                    component: {
                        name: to,
                        options: {
                            animations: {
                                setStackRoot: {
                                    enabled: true,
                                },
                            },
                            topBar: {
                                visible: false,
                            },
                        },
                    },
                });
            } catch (error) {
                Logger.log('Navigator -> SetStackRoot -> Error -> ', error);
            }
        })();
    }

    static navigateTo(from: string, to: string, props: any = {}): void {
        (async () => {
            try {
                await Navigation.push(from, {
                    component: {
                        name: to,
                        options: {
                            topBar: {
                                animate: true,
                                backButton: {
                                    color: Colors.Primary,
                                    icon: Images.Arrow,
                                    showTitle: false,
                                },
                                title: {
                                    alignment: 'center',
                                    color: Colors.Black,
                                },
                                visible: true,
                            },
                        },
                        passProps: {
                            ...props,
                        },
                    },
                });
            } catch (error) {
                Logger.log('Navigator -> NavigateTo -> Error -> ', error);
            }
        })();
    }

    static modal(from: string, to: string, props: any = {}): void {
        (async () => {
            try {
                await Navigation.showModal({
                    stack: {
                        children: [
                            {
                                component: {
                                    name: to,
                                    options: {
                                        topBar: {
                                            animate: true,
                                            title: {
                                                alignment: 'center',
                                                color: Colors.Black,
                                            },
                                            visible: true,
                                        },
                                    },
                                    passProps: {
                                        ...props,
                                        componentId: to,
                                        isModal: true,
                                    },
                                },
                            },
                        ],
                    },
                });
            } catch (e) {
                Logger.log('Lib -> Navigation -> modal:', e);
            }
        })();
    }

    static back(from: string): void {
        (async () => {
            try {
                await Navigation.pop(from);
            } catch (e) {
                Logger.log('Lib -> Navigation -> back:', e);
            }
        })();
    }
}

export default Navigator;
