import React, { useState } from 'react';
import { connect } from 'react-redux';

import Add from './Add';
import Container from '../../../../components/Container';

import * as actions from '../../../../redux/actions';
import { generateId } from '../../../../utils/userController'

const AddAnnouncementsScreen = ({ navigation, addAnnouncements }) => {
  const [image, _image] = useState(null);
  const [title, _title] = useState('');
  const [about, _about] = useState('');
  const [rating, _rating] = useState(1);
  const [release, _release] = useState(new Date())
  const [showOriginal, _showOriginal] = useState(false);

  const back = () => navigation.goBack();

  const onChangeTitle = (t) => _title(t);

  const onChangeAbout = (a) => _about(a);

  const toggleOriginalImage = () => _showOriginal(!showOriginal);

  const create = () => addAnnouncements({ announcement: { _id: generateId(), image, title, about, release, rating }})

  const enabled = title.length > 3 && about.length > 3;

  return (
    <Container title='Create' navigation={navigation} back={back}>
      <Add
        create={create}
        enabled={enabled}

        date={release}
        _date={_release}
        image={image}
        _image={_image}
        title={title}
        about={about}
        rating={rating}
        _rating={_rating}
        onChangeTitle={onChangeTitle}
        onChangeAbout={onChangeAbout}

        showOriginal={showOriginal}
        toggleOriginalImage={toggleOriginalImage}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAnnouncements: (announcement) => dispatch(actions.addAnnouncementsAction(announcement)),
});

export default connect(null, mapDispatchToProps)(AddAnnouncementsScreen);
