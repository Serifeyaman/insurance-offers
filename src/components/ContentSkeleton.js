import React from 'react'
import ContentLoader from 'react-content-loader'

const ContentSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={window.innerWidth}
            height={"25%"}
            viewBox={`0 0 ${window.innerWidth} 160`}
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
        >
            <rect x="1%" y="2%" rx="3" ry="3" width="14%" height="55%" />

            <rect x="17%" y="5%" rx="3" ry="3" width="15%" height="15%" />
            <rect x="17%" y="28%" rx="2" ry="2" width="18%" height="25%" />

            <rect x="78%" y="5%" rx="3" ry="3" width="6%" height="7%" />
            <rect x="78%" y="15%" rx="3" ry="3" width="6%" height="7%" />
            <rect x="72%" y="30%" rx="3" ry="3" width="12%" height="20%" />

        </ContentLoader>
    )
}

export default ContentSkeleton