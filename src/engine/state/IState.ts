export interface IState<BindArgsT, UnbindReturnT> {
  bindState(args?: BindArgsT): void;
  unbindState(): UnbindReturnT | undefined | void;
  render(context: CanvasRenderingContext2D): void;
}

export interface IDescriptorProviderState<T,R> {
  new(): IState<T, R>;
  get descriptor(): string;
}
