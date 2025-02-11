import { createGlobalState } from 'react-use';

import { CollectionItem } from '@/components/layouts/MainLayout/MainLayout';

export const useCurrentTool = createGlobalState<string | undefined | null>(
  localStorage.getItem(':currentTool') || 'settings',
);
export const useCollections = createGlobalState<CollectionItem[]>([]);
export const useOpenaiAPIKey = createGlobalState<any>(localStorage.getItem(':openaiKey') || process.env.NEXT_PUBLIC_OPENAI);
export const useAddCollectionAction = createGlobalState<() => any | undefined>();
export const useCurrentCollection = createGlobalState<any>();
export const useSubCollectionId = createGlobalState<any>();
export const useCurrentCollectionEditId = createGlobalState<any>();
export const useCurrentCollectionRemoveId = createGlobalState<any>();
export const useCurrentCollectionDownId = createGlobalState<any>();
export const useCurrentCollectionUpId = createGlobalState<any>();
export const useQuickActions = createGlobalState<any[]>([]);
export const useQuickActionsQuery = createGlobalState<string>('');
export const useCurrentTypeBoxId = createGlobalState<any>(-1);
export const useModel = createGlobalState<string>(
  localStorage.getItem(':model') || 'gpt-3.5-turbo',
);
export const usePrompts = createGlobalState<any[]>([]);
export const useLastMessageByCollection = createGlobalState<Record<any, string>>({});
