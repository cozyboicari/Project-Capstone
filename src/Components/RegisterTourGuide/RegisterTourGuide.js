import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file global
import { colors } from '../../ConfigGlobal';

//library
import Icons from 'react-native-vector-icons/Ionicons';

const ItemBenefit = ({ nameIcon, title, text }) => {
    return (
        <View style={styles.containerItemBenefit}>
            <Icons name={nameIcon} size={40} color='#444'/>
            <Text style={styles.titleBenefit}>{title}</Text>
            <Text style={styles.textBenefit}>{text}</Text>
        </View>
    );
}

const ItemStep = ({ step, title, text }) => {
    return (
        <View style={styles.containerItemStep}>
            <Text style={styles.step}>{step}</Text>
            <View style={{ position: 'absolute' }}>
                <Text style={styles.titleStep}>{title}</Text>
                <Text style={styles.textStep}>{text}</Text>
            </View>
        </View>
    )
}

const ItemOffer = ({ title, text }) => {
    return(
        <View style={styles.containerItemOffer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons name='checkmark-outline' size={27} color={colors.COLOR_HEART}/>
                <Text style={styles.textOfferItem}>{title}</Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
                <Text style={styles.textOffterItemBotom}>{text}</Text>
            </View>
        </View>
    );
}

export default class RegisterTourGuide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props}/>

                {/* phan gioi thieu va bat dau */}
                <ScrollView>
                    <View style={styles.containerIntroduceAndStart}>
                        {/* image get started */}
                        <View style={styles.containerImageTop}>
                            <Image 
                                source={{ uri: 'https://i.pinimg.com/564x/2c/c0/a3/2cc0a30a088805e9fcd06776effa6be9.jpg'}}
                                style={styles.imageTop}
                            />
                            <View style={styles.layoutImageTop}>
                                <Text style={[styles.textLayoutImageTop, { marginTop: 50 }]}>Kiếm tiền bằng những gì</Text>
                                <Text style={[styles.textLayoutImageTop, { marginBottom: 7 }]}>Bạn yêu thích</Text>
                                <Text style={styles.textLayoutImageTopBottom}>
                                    Chia sẻ niềm đam mê và tình yêu của bạn đối với 
                                </Text>
                                <Text style={styles.textLayoutImageTopBottom}>
                                    trải nghiệm chuyến đi của bạn
                                </Text>
                            </View>
                            {/* what is your tour */}
                            <View style={styles.containerWhatIsYourtour}>
                                <Text style={styles.textWhatIsYourtour}>Yourtour là gì</Text>
                                <Text style={styles.textWhatIsYourtourBottom}>
                                Đó là một nền tảng miễn phí cho phép người dân địa phương, như bạn, kiếm tiền bằng cách tổ chức chuyến tham quan hoặc trải nghiệm riêng tại thành phố của họ.
                                </Text>
                            </View>
                            {/* image mid */}
                            <View style={styles.containerImageMid}>
                                <Image 
                                    source={{ uri: 'https://i.pinimg.com/564x/f7/f8/6a/f7f86a04d89a90611d007f1979e10d3a.jpg' }}
                                    style={styles.imageMid}
                                />
                            </View>
                            {/* benefit cua hdv */}
                            <View style={styles.containerBenefitTourguide}>
                                <Text style={styles.textBenefitTourguide}>Lợi ích của việc trở thành hướng dẫn viên du lịch Yourtour</Text>
                                <ItemBenefit 
                                    nameIcon='cash-outline' 
                                    title='Kiếm tiền khi làm những gì bạn yêu thích'
                                    text='Nếu bạn yêu thành phố của mình tại sao không chia sẻ nó với phần còn lại của thế giới? Thậm chí tốt hơn, tại sao không kiếm tiền trong khi làm như vậy. Ở đây, bạn thiết lập giá của riêng bạn.'
                                />
                                <ItemBenefit 
                                    nameIcon='globe-outline' 
                                    title='Kết nối trên toàn thế giới với những người như bạn'
                                    text='Gặp gỡ những người từ khắp nơi trên thế giới có cùng đam mê và sở thích như bạn. Tạo ra những kỷ niệm cho cuộc đời và những kết nối mới.'
                                />
                                <ItemBenefit 
                                    nameIcon='heart' 
                                    title='Chia sẻ đam mê của bạn, theo cách của riêng bạn!'
                                    text='Còn cách nào tốt hơn để hiển thị một thành phố hơn là qua con mắt của một người dân địa phương! Tạo trải nghiệm có một không hai, từ một lớp học nấu ăn đến một chuyến tham quan trên con đường tuyệt vời hoặc một hội thảo khiêu vũ. Sự lựa chọn là của bạn!'
                                />
                            </View>
                            {/* thu tu thuc hien */}
                            <View style={styles.containerSteps}>
                                <Text style={styles.titleSteps}>Các bước để trở thành hướng dẫn viên du lịch</Text>
                                <ItemStep 
                                    step="1" 
                                    title="Tạo tài khoản Yourtour của bạn"
                                    text="Đăng ký và thiết lập hồ sơ của bạn. Bạn đã có tài khoản rồi? Sau đó, hãy bắt đầu với ứng dụng lưu trữ của bạn."
                                />
                                <ItemStep 
                                    step="2" 
                                    title="Trả lời một bảng câu hỏi đơn giản"
                                    text="Chúng tôi muốn biết thêm từ bạn. Nó sẽ giúp chúng tôi có được ý tưởng về những gì bạn thực sự đam mê."
                                />
                                <ItemStep 
                                    step="3" 
                                    title="Chúng ta sẽ giữ liên lạc"
                                    text="Gửi bảng câu hỏi của bạn và thế là xong! Sau khi chúng tôi xem xét đơn đăng ký của bạn, nhóm của chúng tôi sẽ liên hệ với bạn."
                                />
                            </View>
                            {/* offer for u */}
                            <View style={styles.containerOfferForU}>
                                <Text style={styles.textTitleOffer}>
                                    Yourtour có thể cung cấp những gì cho bạn
                                </Text>
                                <ItemOffer 
                                    title={`Nền tảng và công cụ tiếp thị miễn phí`}
                                    text='Một nền tảng dễ sử dụng để hiển thị các ưu đãi và quản lý các lượt đặt trước của bạn. Quảng cáo ưu đãi của bạn trên nền tảng là miễn phí và các chuyên gia tiếp thị của chúng tôi sẽ đảm nhận tất cả các hoạt động quảng bá chuyên nghiệp.'
                                />
                                <ItemOffer 
                                    title={`Hỗ trợ máy chủ lưu trữ tuyệt vời`}
                                    text='Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào trong giờ hành chính và cuối tuần. Chúng tôi có một nhóm đầy đủ các chuyên gia chăm sóc khách hàng, dữ liệu và du lịch, tất cả đều ở đây để giúp nâng cao trải nghiệm lưu trữ của bạn.'
                                />
                                <ItemOffer 
                                    title={`Thanh toán được đảm bảo`}
                                    text='Chúng tôi thực hiện thanh toán an toàn và đáng tin cậy có thể đảm bảo thanh toán của bạn, ngay cả khi hủy trễ và vắng mặt.'
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* phan get started */}
                <View style={styles.containerButtonStarted}>
                    <Text style={styles.textStarted}>Bắt đầu kiếm tiền từ những gì bạn yêu thích!</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Active Tour Guide Screen');
                        }}
                        style={{ flex: .8 }}
                    >
                        <View style={styles.containerButton}>
                            <Text style={styles.textButton}>Bắt đầu!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}