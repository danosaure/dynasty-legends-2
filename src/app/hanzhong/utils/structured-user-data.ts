import type { PersistenceHanzhongUserDataType } from '../../../persistence';
import type { HanzhongUserDomainData } from '../types';

const OLD_REGEX = /^hanzhong--(.*?)--(.*)$/;
const NEW_REGEX = /^(.*?)\/(.*)$/;

export const generateStructuredUserData = (persistenceUserData: PersistenceHanzhongUserDataType): HanzhongUserDomainData => {
  return Object.keys(persistenceUserData).reduce<HanzhongUserDomainData>((hanzhongUserData: HanzhongUserDomainData, id: string) => {
    const chunks = NEW_REGEX.exec(id) ?? OLD_REGEX.exec(id);

    if (chunks) {
      const structure = chunks[1];
      const dataKey = chunks[2];

      return {
        ...hanzhongUserData,
        [structure]: {
          ...hanzhongUserData[structure],
          [dataKey]: persistenceUserData[id],
        },
      } as const;
    }
    return hanzhongUserData;
  }, {});
};

export const flattenStructuredUserData = (structuredUserData: HanzhongUserDomainData): PersistenceHanzhongUserDataType => {
  return Object.keys(structuredUserData).reduce<PersistenceHanzhongUserDataType>(
    (persistenceUserData: PersistenceHanzhongUserDataType, section: string) => {
      return Object.keys(structuredUserData[section]).reduce<PersistenceHanzhongUserDataType>(
        (cumul: PersistenceHanzhongUserDataType, id: string) =>
          ({
            ...cumul,
            [`${section}/${id}`]: structuredUserData[section][id],
          } as const),
        persistenceUserData
      );
    },
    {}
  );
};
