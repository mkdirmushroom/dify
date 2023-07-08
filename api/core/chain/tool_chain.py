from typing import List, Dict, Optional, Any

from langchain.callbacks.manager import CallbackManagerForChainRun, AsyncCallbackManagerForChainRun
from langchain.chains.base import Chain
from langchain.tools import BaseTool


class ToolChain(Chain):
    input_key: str = "input"  #: :meta private:
    output_key: str = "output"  #: :meta private:

    tool: BaseTool

    @property
    def _chain_type(self) -> str:
        return "tool_chain"

    @property
    def input_keys(self) -> List[str]:
        """Expect input key.

        :meta private:
        """
        return [self.input_key]

    @property
    def output_keys(self) -> List[str]:
        """Return output key.

        :meta private:
        """
        return [self.output_key]

    def _call(
            self,
            inputs: Dict[str, Any],
            run_manager: Optional[CallbackManagerForChainRun] = None,
    ) -> Dict[str, Any]:
        input = inputs[self.input_key]
        output = self.tool.run(input, self.verbose)
        return {self.output_key: output}

    async def _acall(
            self,
            inputs: Dict[str, Any],
            run_manager: Optional[AsyncCallbackManagerForChainRun] = None,
    ) -> Dict[str, Any]:
        """Run the logic of this chain and return the output."""
        input = inputs[self.input_key]
        output = await self.tool.arun(input, self.verbose)
        return {self.output_key: output}
