import React from "react";
import styled from "styled-components";
import RoundedContainer from "../components/RoundedContainer";

const ActionButton = styled.button`
  border: 0.1px solid blue;
  background: transparent;
  font-variant: all-small-caps;
`
const SubscribersAndSubscriptions = styled.div`
  display: inline-flex;
  border: 0.1px solid blue;
`
const Subscribers = styled.div`
  border: 0.1px solid brown;
`
const Subscriptions = styled.div`
  border: 0.1px solid greenyellow;
`
const SubCount = styled.div`
  color: dodgerblue
`
const SubText = styled.div`
  color: dodgerblue
`

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subscribersSize: 0,
            subscriptionsSize: 0
        }
    }


    render() {
        return <RoundedContainer>
            this is profile view
            <SubscribersAndSubscriptions>
                <Subscribers>
                    <SubCount>
                        {this.state.subscribersSize}
                    </SubCount>
                    <SubText>
                        Подписчиков
                    </SubText>
                </Subscribers>
                <Subscriptions>
                    <SubCount>
                        {this.state.subscriptionsSize}
                    </SubCount>
                    <SubText>
                        Подписок
                    </SubText>
                </Subscriptions>
            </SubscribersAndSubscriptions>
            <ActionButton>Подписаться</ActionButton>
        </RoundedContainer>
    }
}

export default Profile