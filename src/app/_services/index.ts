


export type RegionPaginatedParams = {
  pageSize?: number;
  artRegionPageKey?: string;
  writingRegionPageKey?: string;
  pageNo?: number;
  status?: string;
};
export type PaginatedParams = {
  pageSize?: number;
  pageKey?: string;

  pageNo?: number;
  limit?: number;
  page?: number;
};

export type PaginationPureResponse = {
  limit?: number;
  page?: string;
  totalPages?: number;
  search?: string;
  totalResults?: number;
  filters?: any;
  isNested?:any
};

export type PaginatedResponse<T> = PaginationPureResponse & {
  results: T[];
};

export const call = async <T>(options: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  query?: Record<string, string>;
  data?: Record<string, unknown> | FormData;
  public?: boolean;
  formData?: FormData;
  defaultHeaderType?: string;
  noHeaders?: boolean;
  appendApiKey?: boolean;
}): Promise<T | null> => {
  const headers = new Headers();
  if (!options?.noHeaders) {
    headers.append(
      'Content-Type',
      options?.defaultHeaderType ?? 'application/json'
    );
  }

  try {
   

    const method = options.method ?? 'GET';

    const url = `${process.env.NEXT_PUBLIC_API_URL}/${options.path}${
      options.query ? `?${new URLSearchParams(options.query).toString()}` : ''
    }`;

    const body = options.data ? JSON.stringify(options.data) : undefined;

    const res = await fetch(url, {
      mode: 'cors',
      method,
      headers,
      body: options?.formData ? options.formData : body
    });
    if (res.status === 204) {
      return null;
    }
    // if (
    //   res.status === 401 &&
    //   options.path !== 'v1/self' &&
    //   !window.location.href.includes('/auth/')
    // ) {
    //   localStorage.clear();
    //   window.location.href = routes.admin.login;
    // }

    const resData = await res?.json();

    return resData ?? null;
  } catch (err) {
    console.log(err);
    // Auth.currentSession throws undefined errors when calling Auth.currentSession when not authenticated...
    if (err === undefined)
      throw new Error('ERR_UNKNOWN_ERROR_CALLING_ENDPOINT');

    throw err;
  }
};
