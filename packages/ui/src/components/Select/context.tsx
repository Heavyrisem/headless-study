import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { filterUndefinedFromArray } from '../../utils/filterUndefinedFromArray';
import { SelectOptionType } from './types';

// interface MultiSelectContextState {
//   selected: string[];
//   multiSelect: true;
// }

// interface SingleSelectContextState {
//   selected?: string;
//   multiSelect: false;
// }

export interface SelectContextState {
  selected: string[];
  options: Record<string, string>;
  handleClickOption: (option: SelectOptionType) => void;
  addSelect: (option: SelectOptionType) => void;
  removeSelect: (option: SelectOptionType) => void;
  addOption: (option: SelectOptionType) => void;
  removeOption: (option: SelectOptionType) => void;
}

// export interface SelectContextState extends A

const initalValue: SelectContextState = {
  options: {},
  selected: [],
  handleClickOption: () => {},
  addSelect: () => {},
  removeSelect: () => {},
  addOption: () => {},
  removeOption: () => {},
};

export const SelectContext = React.createContext<SelectContextState>(initalValue);

export interface BaseSelectContextProviderProps extends PropsWithChildren {
  multi?: boolean;
}
export interface MultiSelectContextProviderProps extends BaseSelectContextProviderProps {
  multi: true;
  selected?: string[];
  defaultSelected?: string[];
  onSelect?: (selected: SelectOptionType[]) => void;
}
export interface SingleSelectContextProviderProps extends BaseSelectContextProviderProps {
  multi?: false;
  selected?: string;
  defaultSelected?: string;
  onSelect?: (selected: SelectOptionType | undefined) => void;
}

export type SelectContextProviderProps = BaseSelectContextProviderProps &
  (MultiSelectContextProviderProps | SingleSelectContextProviderProps);

export const SelectContextProvider: React.FC<SelectContextProviderProps> = ({
  // multiSelect = false,
  // selected: controlledSelect,
  // defualtSelected,
  children,
  // onSelect,
  ...rest
}) => {
  const [options, setOptions] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState(
    rest.multi
      ? rest.selected ?? rest.defaultSelected ?? []
      : filterUndefinedFromArray(rest.selected ?? rest.defaultSelected) ?? [],
  );

  const isControlled = useMemo(() => rest.selected !== undefined, [rest.selected]);

  const addSelect = useCallback<SelectContextState['addSelect']>(
    (option) => {
      let newSelected: string[];
      if (rest.multi) {
        newSelected = [...new Set(selected.filter((id) => id !== option.id).concat(option.id))];
      } else {
        newSelected = [option.id];
      }

      setSelected((prev) => {
        if (isControlled) {
          return prev;
        }
        return newSelected;
      });

      if (rest.multi) rest.onSelect?.(newSelected.map((id) => ({ id, value: options[id] })));
      else rest.onSelect?.(newSelected.map((id) => ({ id, value: options[id] })).at(0));
    },
    [selected, rest, isControlled, options],
  );

  const removeSelect = useCallback<SelectContextState['removeSelect']>(
    (option) => {
      const newSelected = [...new Set(selected.filter((id) => id !== option.id))];

      setSelected((prev) => {
        if (isControlled) {
          return prev;
        }
        return newSelected;
      });

      if (rest.multi) rest.onSelect?.(newSelected.map((id) => ({ id, value: options[id] })));
      else rest.onSelect?.(newSelected.map((id) => ({ id, value: options[id] })).at(0));
    },
    [isControlled, options, rest, selected],
  );

  const addOption = useCallback<SelectContextState['addOption']>((option) => {
    setOptions((prev) => {
      return { ...prev, [option.id]: option.value };
    });
  }, []);

  const removeOption = useCallback<SelectContextState['removeOption']>((option) => {
    setOptions((prev) => {
      return Object.fromEntries(Object.entries(prev).filter(([key]) => key !== option.id));
    });
  }, []);

  const handleClickOption = useCallback<SelectContextState['handleClickOption']>(
    (option) => {
      const isAlreadySelected = selected.includes(option.id);

      if (isAlreadySelected) {
        removeSelect(option);
      } else {
        addSelect(option);
      }
    },
    [addSelect, removeSelect, selected],
  );

  const value = useMemo(
    () => ({
      options,
      selected,
      addSelect,
      removeSelect,
      addOption,
      removeOption,
      handleClickOption,
    }),
    [addOption, addSelect, handleClickOption, options, removeOption, removeSelect, selected],
  );

  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
};
