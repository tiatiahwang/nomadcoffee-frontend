import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as SolidHeart,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  SeeCoffeeShopsQuery,
  useToggleLikeMutation,
} from '../../graphql/generated';
import Avatar from '../Avatar';
import { FatText } from '../shared';

const ShopContainer = styled.div`
  max-width: 615px;
  margin-bottom: 60px;
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
`;

const ShopHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;

const ShopFile = styled.div`
  img {
    width: 100%;
  }
`;

const ShopData = styled.div`
  padding: 12px 15px;
`;

const ShopActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShopAction = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 10px;
  svg {
    font-size: 20px;
  }
`;

const Likes = styled(FatText)`
  margin-top: 15px;
  display: block;
`;

type ArrayElement<ArrayType extends readonly unknown[] | null | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

interface Props {
  shop: ArrayElement<SeeCoffeeShopsQuery['seeCoffeeShops']>;
}

const Shop = ({ shop }: Props) => {
  const [toggleLike] = useToggleLikeMutation({
    variables: { id: shop?.id! },
    update: (cache, { data }) => {
      if (!data?.toggleLike.ok) return;
      const id = `CoffeeShop:${shop?.id!}`;
      cache.modify({
        id,
        fields: {
          isLiked: (prev) => !prev,
          likes: (prev) => (!shop?.isLiked ? prev + 1 : prev - 1),
        },
      });
    },
  });
  let fileUrl;
  if (shop?.photos) {
    fileUrl = shop?.photos[0]?.url;
  }
  return (
    <ShopContainer>
      <ShopHeader>
        <Avatar url={shop?.user?.avatarURL} size="lg" />
        <Username>{shop?.user?.username}</Username>
      </ShopHeader>
      <ShopFile>
        <img src={fileUrl} alt="커피샵" />
      </ShopFile>
      <ShopData>
        <ShopActions>
          <div>
            <ShopAction
              onClick={() => toggleLike({ variables: { id: shop!.id } })}
            >
              <FontAwesomeIcon
                style={{ color: shop?.isLiked ? 'tomato' : 'inherit' }}
                icon={shop?.isLiked ? SolidHeart : faHeart}
              />
            </ShopAction>
            <ShopAction>
              <FontAwesomeIcon icon={faComment} />
            </ShopAction>
            <ShopAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </ShopAction>
          </div>
          <ShopAction>
            <FontAwesomeIcon icon={faBookmark} />
          </ShopAction>
        </ShopActions>
        <Likes>{shop?.likes} 좋아요</Likes>
      </ShopData>
    </ShopContainer>
  );
};

export default Shop;
