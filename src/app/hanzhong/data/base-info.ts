export type BaseInfoIdFn = (name: string) => string;

export type BaseInfo = {
  id: string;
  name: string;
};

export const baseInfo = (name: string, idFunc: BaseInfoIdFn): BaseInfo => ({
  id: idFunc(name),
  name,
});
