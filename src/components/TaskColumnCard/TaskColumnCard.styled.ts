import styled from 'styled-components';

interface ITaskPriority {
  name: string;
}

export const TaskCard = styled.article`
  width: 100%;

  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 14px;
  padding-right: 14px;

  background-color: ${p => p.theme.colors.taskCardBackground};

  border: ${p => p.theme.borders.tasks};
  border-radius: ${p => p.theme.radii.normal};
`;

export const TaskTitle = styled.h3`
  margin-bottom: 28px;

  font-style: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.columnHeader};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  gap: ${p => p.theme.space[3]}px;
`;

export const TaskAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;

  overflow: hidden;

  border: ${p => p.theme.borders.avatar};
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.white};
`;

export const TaskImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TaskPriority = styled.div<ITaskPriority>`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: 12px;
  padding-right: 12px;

  font-style: ${p => p.theme.fontFamily.main};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.white2};
  background-color: ${p => {
    switch (p.name) {
      case 'low':
        return p.theme.colors.blue5;
      case 'medium':
        return p.theme.colors.yellow;
      case 'high':
        return p.theme.colors.pink;
      default:
        return p.theme.colors.grey4;
    }
  }};

  border-radius: ${p => p.theme.radii.small};
`;
